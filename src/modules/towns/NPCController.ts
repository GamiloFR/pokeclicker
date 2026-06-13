import { Observable } from 'knockout';
import { BootstrapState, modalState } from '../utilities/DisplayObservables';
import NPC from './NPC';

class NPCController {
    public static selectedNPC = ko.observable<NPC>();
    private static modalState: any;
    public static openDialog(npc: NPC) {
        this.selectedNPC(npc);
        $('#npc-modal').modal();
        npc.setTalkedTo();
        if (!this.modalState) {
            this.modalState = (modalState['npc-modalObservable'] as Observable<BootstrapState>).subscribe((value: BootstrapState) => {
                if (value === 'hidden') {
                    this.selectedNPC(undefined);
                }
            });
        }
    }
}

export default NPCController;
