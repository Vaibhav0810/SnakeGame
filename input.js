let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

//for moving snake while presiing keys
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            // this beacause if we press down key when snake is moving up it starts to go down but we cant do this in real snake game
            // so this check help to indentify if it was going down or up before so it wont do anything
            if (lastInputDirection.y !== 0) break
            // negative direction means going up
            inputDirection = { x: 0, y: -1 }
            break

        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break

        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break

        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}