import Task from '../../Task';

class OpenModalTask extends Task {
    private _modal: string;

    private _intervalId: NodeJS.Timeout;
    private _showModalHandler: () => void;
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
        $(this._modal).off('shown.bs.modal', this._showModalHandler);
        this._rejectPromise();
    }

    public run(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this._intervalId = setInterval(() => {
                $(this._modal).modal('show');
            }, 50);

            this._showModalHandler = () => {
                clearInterval(this._intervalId);
                resolve();
            };
            $(this._modal).on('shown.bs.modal', this._showModalHandler);

            this._rejectPromise = reject;
        });
    }
}

export default OpenModalTask;
