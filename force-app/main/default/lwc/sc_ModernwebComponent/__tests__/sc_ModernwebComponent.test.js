import { createElement } from '@lwc/engine-dom';
import ScModernwebComponent from 'c/sc_ModernwebComponent';

describe('c-sc-modernweb-component', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders component successfully', () => {
        const element = createElement('c-sc-modernweb-component', {
            is: ScModernwebComponent
        });

        document.body.appendChild(element);

        expect(element).toBeTruthy();
    });
});