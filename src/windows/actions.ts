/**
 * 处理渲染器进程到主进程的异步通信
 */

import { WebviewWindow } from '@tauri-apps/api/window'
import { emit } from '@tauri-apps/api/event'

/**
 * @desc 创建新窗口
 */
export async function createWin(args: any) {
    await emit('win-create', args)
}

/**
 * @desc 获取窗口
 * @param args {string}
 */
export async function getWin(label: string) {
    return await WebviewWindow.getByLabel(label)
}

/**
 * @desc 设置窗口
 * @param type {string} 'show'|'hide'|'close'|'min'|'max'|'max2min'|'exit'|'relaunch'
 */
export async function setWin(type: string) {
    await emit('win-' + type)
}

/**
 * @desc 登录窗口
 */
export async function loginWin() {
    await createWin({
        label: 'login',
        title: '登录',
        url: '/login',
        width: 320,
        height: 420,
        resizable: true,
        alwaysOnTop: true
    })
}