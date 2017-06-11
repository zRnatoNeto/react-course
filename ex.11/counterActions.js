export function inc() {
    return {
        type: 'INC'
    }
}

export function dec() {
    return {
        type: 'DEC'
    }
}

export function stepChanged(e) {
    return {
        type: 'SETEP_CHANGED',
        payload: e.target.value
    }
}