import path from 'node:path'
import type { UserConfig } from 'vite'

export default {
    root: ".",
    resolve: {
        alias: {
            '@app': path.join(__dirname, './src/app'),
            '@assets': path.join(__dirname, './src/assets'),
            '@routes': path.join(__dirname, './src/routes'),
            '@apis': path.join(__dirname, './src/apis'),
            '@lib': path.join(__dirname, './src/lib'),
        }
    }
} satisfies UserConfig