import { Comp } from './component';

export default function execute() {
    const app = document.querySelector<HTMLDivElement>('#test-jsx')!
    app.append(Comp as unknown as Node);
}