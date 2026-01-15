import '@assets/media/typescript.svg'
import { setupCounter } from './counter'

export default function execute() {
    setupCounter(document.querySelector('#counter') as HTMLButtonElement)
}
