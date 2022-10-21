import { update as updateSnake, draw as drawSnake, SNAKE_SPEED , getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'

import {outsideGrid} from'./grid.js'

// first set up game loop
// a game is gonna reapeat itself over and over again 
// eg if snake moves we can update its position and constant update our food

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {

    if(gameOver){
        if (confirm('You lost, Click OK to play again!!')){
            window.location='/'
        }
        return
    }

    // upper line will tell us the time to render frame
    // and lower will take that and render frame at that time
    window.requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 // bcoz thats in milisecond

    // we dont need to move that fast
    // so we will do this
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return
    }


    lastRenderTime = currentTime
    console.log('render')

    // Game logic

    update()
    draw()

}

// to start our loop very first time
window.requestAnimationFrame(main)

// snake


function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

//17:00
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)

}

function checkDeath(){
    
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

