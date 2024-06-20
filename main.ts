namespace SpriteKind {
    export const waterthing = SpriteKind.create()
    export const firething = SpriteKind.create()
    export const powerup = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() >= 1) {
        if (direction == 0) {
            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile3`)
            tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), true)
            info.changeScoreBy(-1)
        } else if (direction == 1) {
            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile3`)
            tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), true)
            info.changeScoreBy(-1)
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . 4 4 4 . . 2 2 2 2 2 . . . . . . 
            . 4 4 2 2 2 2 2 2 2 2 2 . . . . . 
            . 2 2 2 . 4 f 4 4 e e e . . . . . 
            . 2 2 4 4 4 f 4 4 4 e 4 e . . . . 
            . 2 4 4 4 f 4 4 4 e e 4 e . . . . 
            . . 2 f f f f 4 4 4 4 e e . . . . 
            . . 2 2 4 4 4 4 4 4 4 . . . . . . 
            . . . 2 2 8 2 2 2 8 2 2 2 2 4 4 4 
            . . . . 8 2 2 2 8 2 2 2 2 2 4 4 4 
            e e 8 8 5 8 8 8 8 2 2 2 . . . . . 
            e e 8 8 8 8 8 5 8 8 8 . . . . . . 
            e e 8 8 8 8 8 8 8 8 8 e e . . . . 
            . . . . . 8 8 8 8 8 8 e e e . . . 
            . . . . . . . . . . . . e e . . . 
            `)
    } else if (direction == 1) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 . . 4 4 4 . 
            . . . . . 2 2 2 2 2 2 2 2 2 4 4 . 
            . . . . . e e e 4 4 f 4 . 2 2 2 . 
            . . . . e 4 e 4 4 4 f 4 4 4 2 2 . 
            . . . . e 4 e e 4 4 4 f 4 4 4 2 . 
            . . . . e e 4 4 4 4 f f f f 2 . . 
            . . . . . . 4 4 4 4 4 4 4 2 2 . . 
            4 4 4 2 2 2 2 8 2 2 2 8 2 2 . . . 
            4 4 4 2 2 2 2 2 8 2 2 2 8 . . . . 
            . . . . . 2 2 2 8 8 8 8 5 8 8 e e 
            . . . . . . 8 8 8 5 8 8 8 8 8 e e 
            . . . . e e 8 8 8 8 8 8 8 8 8 e e 
            . . . e e e 8 8 8 8 8 8 . . . . . 
            . . . e e . . . . . . . . . . . . 
            `)
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (mySprite.tileKindAt(TileDirection.Bottom, tileUtil.arrow0)) {
            mySprite.vy = -1000
        } else {
            mySprite.vy = Jump
        }
    }
})
info.onCountdownEnd(function () {
    Jump = -500
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . 1 1 1 . . . . . 
        . . . . . . . e e 1 . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . e e e . . . . . . . . . 
        . . . e e e . . . . . . . . . . 
        1 . e e e . . . . . . . . . . . 
        . 1 e e . . . . . . . . . . . . 
        1 2 1 . . . . . . . . . . . . . 
        2 1 . 1 . . . . . . . . . . . . 
        `, SpriteKind.Projectile, mySprite.x, mySprite.y)
    myDart.setTrace()
    myDart.controlWithArrowKeys()
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    myDart.angle += 1
    myDart.pow += 1
    myDart.traceColor += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.setImage(img`
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 . . . . 
            . . . . . 4 f 4 4 e e e . . . . 
            . . . 4 4 4 f 4 4 4 e 4 e . . . 
            . . 4 4 4 f 4 4 4 e e 4 e . . . 
            . . . f f f f 4 4 4 4 e . . . . 
            . . . . . 4 4 4 4 4 4 . . . . . 
            . . . . 2 2 8 2 2 8 2 2 . . . . 
            . . . 2 2 2 8 2 2 8 2 2 2 . . . 
            . . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
            . . 4 4 2 8 5 8 8 5 8 2 4 4 . . 
            . . 4 4 4 8 8 8 8 8 8 4 4 4 . . 
            . . 4 4 8 8 8 8 8 8 8 8 4 4 . . 
            . . . . 8 8 8 . . 8 8 8 . . . . 
            . . . e e e . . . . e e e . . . 
            . . e e e e . . . . e e e e . . 
            `)
        direction = 0
    } else {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . 4 4 4 . . 2 2 2 2 2 . . . . . . 
            . 4 4 2 2 2 2 2 2 2 2 2 . . . . . 
            . 2 2 2 . 4 f 4 4 e e e . . . . . 
            . 2 2 4 4 4 f 4 4 4 e 4 e . . . . 
            . 2 4 4 4 f 4 4 4 e e 4 e . . . . 
            . . 2 f f f f 4 4 4 4 e e . . . . 
            . . 2 2 4 4 4 4 4 4 4 . . . . . . 
            . . . 2 2 8 2 2 2 8 2 2 2 2 4 4 4 
            . . . . 8 2 2 2 8 2 2 2 2 2 4 4 4 
            e e 8 8 5 8 8 8 8 2 2 2 . . . . . 
            e e 8 8 8 8 8 5 8 8 8 . . . . . . 
            e e 8 8 8 8 8 8 8 8 8 e e . . . . 
            . . . . . 8 8 8 8 8 8 e e e . . . 
            . . . . . . . . . . . . e e . . . 
            `)
        direction = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.setImage(img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . . e e e 4 4 f 4 . . . . . 
            . . . e 4 e 4 4 4 f 4 4 4 . . . 
            . . . e 4 e e 4 4 4 f 4 4 4 . . 
            . . . . e 4 4 4 4 f f f f . . . 
            . . . . . 4 4 4 4 4 4 . . . . . 
            . . . . 2 2 8 2 2 8 2 2 . . . . 
            . . . 2 2 2 8 2 2 8 2 2 2 . . . 
            . . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
            . . 4 4 2 8 5 8 8 5 8 2 4 4 . . 
            . . 4 4 4 8 8 8 8 8 8 4 4 4 . . 
            . . 4 4 8 8 8 8 8 8 8 8 4 4 . . 
            . . . . 8 8 8 . . 8 8 8 . . . . 
            . . . e e e . . . . e e e . . . 
            . . e e e e . . . . e e e e . . 
            `)
        direction = 1
    } else {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 . . 4 4 4 . 
            . . . . . 2 2 2 2 2 2 2 2 2 4 4 . 
            . . . . . e e e 4 4 f 4 . 2 2 2 . 
            . . . . e 4 e 4 4 4 f 4 4 4 2 2 . 
            . . . . e 4 e e 4 4 4 f 4 4 4 2 . 
            . . . . e e 4 4 4 4 f f f f 2 . . 
            . . . . . . 4 4 4 4 4 4 4 2 2 . . 
            4 4 4 2 2 2 2 8 2 2 2 8 2 2 . . . 
            4 4 4 2 2 2 2 2 8 2 2 2 8 . . . . 
            . . . . . 2 2 2 8 8 8 8 5 8 8 e e 
            . . . . . . 8 8 8 5 8 8 8 8 8 e e 
            . . . . e e 8 8 8 8 8 8 8 8 8 e e 
            . . . e e e 8 8 8 8 8 8 . . . . . 
            . . . e e . . . . . . . . . . . . 
            `)
        direction = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.waterthing, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.fountain)
    otherSprite.startEffect(effects.fountain)
    if (controller.up.isPressed()) {
        mySprite.setVelocity(0, -5000)
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    myDart.throwDart()
    myDart.setFlag(SpriteFlag.DestroyOnWall, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.powerup, function (sprite, otherSprite) {
    Jump = -1000
    info.startCountdown(50)
    sprites.destroy(otherSprite, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
let location: tiles.Location = null
let mySprite3: Sprite = null
let myDart: Dart = null
let mySprite4: Sprite = null
let direction = 0
let mySprite: Sprite = null
let Jump = 0
Jump = -500
mySprite = sprites.create(img`
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . 4 f 4 4 e e e . . . . 
    . . . 4 4 4 f 4 4 4 e 4 e . . . 
    . . 4 4 4 f 4 4 4 e e 4 e . . . 
    . . . f f f f 4 4 4 4 e . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . 2 2 8 2 2 8 2 2 . . . . 
    . . . 2 2 2 8 2 2 8 2 2 2 . . . 
    . . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
    . . 4 4 2 8 5 8 8 5 8 2 4 4 . . 
    . . 4 4 4 8 8 8 8 8 8 4 4 4 . . 
    . . 4 4 8 8 8 8 8 8 8 8 4 4 . . 
    . . . . 8 8 8 . . 8 8 8 . . . . 
    . . . e e e . . . . e e e . . . 
    . . e e e e . . . . e e e e . . 
    `, SpriteKind.Player)
mySprite.z = 1e+21
controller.moveSprite(mySprite, 110, 0)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite.ay = 400
scene.cameraFollowSprite(mySprite)
let list = tiles.getTilesByType(assets.tile`myTile3`)
direction = 0
info.setScore(15)
for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
    tiles.setWallAt(value, false)
}
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    tiles.setWallAt(value, true)
}
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    tiles.setWallAt(value, true)
}
for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
    mySprite4 = sprites.create(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 b b b b b b 6 6 6 6 6 
        6 6 6 6 b b b b b b b b 6 6 6 6 
        6 b 6 6 6 b b b b b b 6 6 6 b 6 
        6 b 6 6 6 b b b b b b 6 6 6 b 6 
        6 b b b b b b b b b b b b b b 6 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.waterthing)
    tiles.placeOnTile(mySprite4, value)
    mySprite4.startEffect(effects.fountain)
    mySprite4.startEffect(effects.fountain)
    mySprite4.startEffect(effects.fountain)
}
for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
    tiles.setWallAt(value, false)
    tiles.setTileAt(value, assets.tile`myTile1`)
}
game.onUpdateInterval(50000, function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        tiles.setTileAt(value, assets.tile`myTile4`)
    }
})
forever(function () {
    if (myDart) {
        if (direction == 0) {
            if (myDart.vy > 0) {
                myDart.setImage(img`
                    . . . . . . . . . . . . 1 . 1 2 
                    . . . . . . . . . . . . . 1 2 1 
                    . . . . . . . . . . . . e e 1 . 
                    . . . . . . . . . . . e e e . 1 
                    . . . . . . . . . . e e e . . . 
                    . . . . . . . . . e e e . . . . 
                    . . . . . . . . e e e . . . . . 
                    . . . . . . . e e e . . . . . . 
                    . . . . . . 1 e e . . . . . . . 
                    . . . . . 1 1 1 . . . . . . . . 
                    . . . . . 1 1 . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (myDart.vy < 0) {
                myDart.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 1 1 . . . . . . . . . 
                    . . . . . 1 1 1 . . . . . . . . 
                    . . . . . . 1 e e . . . . . . . 
                    . . . . . . . e e e . . . . . . 
                    . . . . . . . . e e e . . . . . 
                    . . . . . . . . . e e e . . . . 
                    . . . . . . . . . . e e e . . . 
                    . . . . . . . . . . . e e e . 1 
                    . . . . . . . . . . . . e e 1 . 
                    . . . . . . . . . . . . . 1 2 1 
                    . . . . . . . . . . . . 1 . 1 2 
                    `)
            }
        } else if (direction == 1) {
            if (myDart.vy > 0) {
                myDart.setImage(img`
                    2 1 . 1 . . . . . . . . . . . . 
                    1 2 1 . . . . . . . . . . . . . 
                    . 1 e e . . . . . . . . . . . . 
                    1 . e e e . . . . . . . . . . . 
                    . . . e e e . . . . . . . . . . 
                    . . . . e e e . . . . . . . . . 
                    . . . . . e e e . . . . . . . . 
                    . . . . . . e e e . . . . . . . 
                    . . . . . . . e e 1 . . . . . . 
                    . . . . . . . . 1 1 1 . . . . . 
                    . . . . . . . . . 1 1 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (myDart.vy < 0) {
                myDart.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 1 1 . . . . . 
                    . . . . . . . . 1 1 1 . . . . . 
                    . . . . . . . e e 1 . . . . . . 
                    . . . . . . e e e . . . . . . . 
                    . . . . . e e e . . . . . . . . 
                    . . . . e e e . . . . . . . . . 
                    . . . e e e . . . . . . . . . . 
                    1 . e e e . . . . . . . . . . . 
                    . 1 e e . . . . . . . . . . . . 
                    1 2 1 . . . . . . . . . . . . . 
                    2 1 . 1 . . . . . . . . . . . . 
                    `)
            }
        }
    }
    if (mySprite.vy < 0) {
        if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile4`)) {
            if (Math.percentChance(75)) {
                mySprite3 = sprites.create(img`
                    . . b b b b . . 
                    . b 5 5 5 5 b . 
                    b 5 d 3 3 d 5 b 
                    b 5 3 5 5 1 5 b 
                    c 5 3 5 5 1 d c 
                    c d d 1 1 d d c 
                    . f d d d d f . 
                    . . f f f f . . 
                    `, SpriteKind.Food)
                animation.runImageAnimation(
                mySprite3,
                [img`
                    . . b b b b . . 
                    . b 5 5 5 5 b . 
                    b 5 d 3 3 d 5 b 
                    b 5 3 5 5 1 5 b 
                    c 5 3 5 5 1 d c 
                    c d d 1 1 d d c 
                    . f d d d d f . 
                    . . f f f f . . 
                    `,img`
                    . . b b b . . . 
                    . b 5 5 5 b . . 
                    b 5 d 3 d 5 b . 
                    b 5 3 5 1 5 b . 
                    c 5 3 5 1 d c . 
                    c 5 d 1 d d c . 
                    . f d d d f . . 
                    . . f f f . . . 
                    `,img`
                    . . . b b . . . 
                    . . b 5 5 b . . 
                    . b 5 d 1 5 b . 
                    . b 5 3 1 5 b . 
                    . c 5 3 1 d c . 
                    . c 5 1 d d c . 
                    . . f d d f . . 
                    . . . f f . . . 
                    `,img`
                    . . . b b . . . 
                    . . b 5 5 b . . 
                    . . b 1 1 b . . 
                    . . b 5 5 b . . 
                    . . b d d b . . 
                    . . c d d c . . 
                    . . c 3 3 c . . 
                    . . . f f . . . 
                    `,img`
                    . . . b b . . . 
                    . . b 5 5 b . . 
                    . b 5 1 d 5 b . 
                    . b 5 1 3 5 b . 
                    . c d 1 3 5 c . 
                    . c d d 1 5 c . 
                    . . f d d f . . 
                    . . . f f . . . 
                    `,img`
                    . . . b b b . . 
                    . . b 5 5 5 b . 
                    . b 5 d 3 d 5 b 
                    . b 5 1 5 3 5 b 
                    . c d 1 5 3 5 c 
                    . c d d 1 d 5 c 
                    . . f d d d f . 
                    . . . f f f . . 
                    `],
                100,
                false
                )
                tiles.placeOnTile(mySprite3, mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top))
                mySprite3.ay = 20
            } else {
                mySprite3 = sprites.create(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f 2 2 2 2 1 1 f f . . . 
                    . . f 1 1 2 2 2 2 1 1 1 1 f . . 
                    . f 1 1 2 2 2 2 2 2 1 1 1 1 f . 
                    . f 1 2 2 1 1 1 1 2 2 1 1 1 f . 
                    f 2 2 2 1 1 1 1 1 1 2 2 2 2 2 f 
                    f 2 2 2 1 1 1 1 1 1 2 2 1 1 2 f 
                    f 1 2 2 1 1 1 1 1 1 2 1 1 1 1 f 
                    f 1 1 2 2 1 1 1 1 2 2 1 1 1 1 f 
                    f 1 1 2 2 2 2 2 2 2 2 2 1 1 2 f 
                    f 1 2 2 f f f f f f f f 2 2 2 f 
                    . f f f 1 1 f 1 1 f 1 1 f f f . 
                    . . f 1 1 1 f 1 1 f 1 1 1 f . . 
                    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
                    . . . f 1 1 1 1 1 1 1 1 f . . . 
                    . . . . f f f f f f f f . . . . 
                    `, SpriteKind.powerup)
                tiles.placeOnTile(mySprite3, mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top))
                mySprite3.ay = 20
            }
            if (Math.percentChance(45)) {
                tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile8`)
            }
        }
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (direction == 0) {
            mySprite.setImage(img`
                . . . . . . 2 2 2 2 2 . . . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . . . . 4 f 4 4 e e e . . . . 
                . . . 4 4 4 f 4 4 4 e 4 e . . . 
                . . 4 4 4 f 4 4 4 e e 4 e . . . 
                . . . f f f f 4 4 4 4 e . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . 2 2 8 2 2 8 2 2 . . . . 
                . . . 2 2 2 8 2 2 8 2 2 2 . . . 
                . . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
                . . 4 4 2 8 5 8 8 5 8 2 4 4 . . 
                . . 4 4 4 8 8 8 8 8 8 4 4 4 . . 
                . . 4 4 8 8 8 8 8 8 8 8 4 4 . . 
                . . . . 8 8 8 . . 8 8 8 . . . . 
                . . . e e e . . . . e e e . . . 
                . . e e e e . . . . e e e e . . 
                `)
        } else if (direction == 1) {
            mySprite.setImage(img`
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . 2 2 2 2 2 2 2 2 2 . . . 
                . . . . e e e 4 4 f 4 . . . . . 
                . . . e 4 e 4 4 4 f 4 4 4 . . . 
                . . . e 4 e e 4 4 4 f 4 4 4 . . 
                . . . . e 4 4 4 4 f f f f . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . 2 2 8 2 2 8 2 2 . . . . 
                . . . 2 2 2 8 2 2 8 2 2 2 . . . 
                . . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
                . . 4 4 2 8 5 8 8 5 8 2 4 4 . . 
                . . 4 4 4 8 8 8 8 8 8 4 4 4 . . 
                . . 4 4 8 8 8 8 8 8 8 8 4 4 . . 
                . . . . 8 8 8 . . 8 8 8 . . . . 
                . . . e e e . . . . e e e . . . 
                . . e e e e . . . . e e e e . . 
                `)
        }
    }
})
game.onUpdateInterval(5000, function () {
    location = list[randint(0, list.length - 1)]
    mySprite2 = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.Food)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(mySprite2, location.getNeighboringLocation(CollisionDirection.Top))
})
