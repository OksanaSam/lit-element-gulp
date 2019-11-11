import { LitElement, html, customElement, property } from 'lit-element'

@customElement('child-element')
export class Child extends LitElement {

    @property({ type: Object })
    private data = { name: 'antoine' };

    constructor() {
        super();
    }

    connectedCallback(): void {
        super.connectedCallback();
    }

    render() {
        return html`
            <div>
                Hello ${this.data.name}
            </div>
        `
    }
}