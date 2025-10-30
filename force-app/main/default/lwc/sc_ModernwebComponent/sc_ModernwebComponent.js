import { LightningElement, api, track } from 'lwc';
import Account_OBJECT from '@salesforce/schema/Account';
import Name_field from '@salesforce/schema/Account.Name';
import Industry_field from '@salesforce/schema/Account.Industry';
import Phone_field from '@salesforce/schema/Account.Phone';
import Website_field from '@salesforce/schema/Account.Website';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ScModernwebComponent extends LightningElement {
    @api recordId;
    
    objectApiName = Account_OBJECT;
    fields = [Name_field, Industry_field, Phone_field, Website_field];

    handlesuccess(event) {
        this.recordId = event.detail.id;
        
        this.dispatchEvent(
            new ShowToastEvent({
                title: '⚡ Success',
                message: `Account loaded successfully!`,
                variant: 'success'
            })
        );
    }

    handleerror(event) {
        console.error('Form error:', event.detail);
        
        this.dispatchEvent(
            new ShowToastEvent({
                title: '⚠️ Error',
                message: 'Failed to load account data.',
                variant: 'error'
            })
        );
    }
}