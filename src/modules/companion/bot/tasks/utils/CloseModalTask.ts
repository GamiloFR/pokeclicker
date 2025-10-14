import Task from '../../Task';

class CloseModalTask extends Task {
    private _modal: string;

    private _intervalId: NodeJS.Timeout;
    private _closeModalHandler: () => void;
    private _rejectPromise: () => void;

    public constructor(modal: string) {
        super();
        this._modal = modal;
    }

    public execute(): Promise<void> {
        throw new Error('Implementation is\'nt necessary');
    }

    public isCompleted(): boolean {
        throw new Error('Implementation is\'nt necessary');
    }

    public interrupt(): void {
        clearInterval(this._intervalId);
        $(this._modal).off('hidden.bs.modal', this._closeModalHandler);
        this._rejectPromise();
    }

    public run(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._intervalId = setInterval(() => {
                $(this._modal).modal('hide');
            }, 50);

            this._closeModalHandler = () => {
                clearInterval(this._intervalId);
                resolve();
            };
            $(this._modal).on('hidden.bs.modal', this._closeModalHandler);

            this._rejectPromise = reject;
        });
    }
}

export default CloseModalTask;
