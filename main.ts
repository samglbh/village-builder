namespace SpriteKind {
    export const waterthing = SpriteKind.create()
    export const firething = SpriteKind.create()
    export const powerup = SpriteKind.create()
    export const fireup = SpriteKind.create()
    export const moon = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.powerup, function (sprite, otherSprite) {
    info.startCountdown(40)
    scaling.scaleByPixels(sprite, -5, ScaleDirection.Uniformly, ScaleAnchor.Middle, true)
    sprites.destroy(otherSprite)
    sprites.destroyAllSpritesOfKind(SpriteKind.powerup)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . f f f f f f f f f . . . . 
            . . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . . f 2 2 2 2 2 2 2 2 2 2 2 f . . 
            . f 2 2 2 2 1 1 1 1 1 2 2 2 2 f . 
            f 2 2 2 2 1 1 2 1 2 1 1 2 2 2 2 f 
            f 2 2 2 2 1 2 1 2 1 2 1 2 2 2 2 f 
            f 2 2 2 2 1 2 1 1 1 2 1 2 2 2 2 f 
            f 2 2 2 f f f f f f f f f 2 2 2 f 
            . f f f 2 2 2 2 2 2 2 2 2 f f f . 
            . f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . 
            . f 2 2 2 f f f f f f f 2 2 2 f . 
            . . f f f . . . . . . . f f f . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, mySprite, -50, 0)
        projectile.startEffect(effects.trail)
    } else if (direction == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . f f f f f f f f f . . . . 
            . . . f 2 2 2 2 2 2 2 2 2 f . . . 
            . . f 2 2 2 2 2 2 2 2 2 2 2 f . . 
            . f 2 2 2 2 1 1 1 1 1 2 2 2 2 f . 
            f 2 2 2 2 1 1 2 1 2 1 1 2 2 2 2 f 
            f 2 2 2 2 1 2 1 2 1 2 1 2 2 2 2 f 
            f 2 2 2 2 1 2 1 1 1 2 1 2 2 2 2 f 
            f 2 2 2 f f f f f f f f f 2 2 2 f 
            . f f f 2 2 2 2 2 2 2 2 2 f f f . 
            . f 2 2 2 2 2 2 2 2 2 2 2 2 2 f . 
            . f 2 2 2 f f f f f f f 2 2 2 f . 
            . . f f f . . . . . . . f f f . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 0)
        projectile.startEffect(effects.trail)
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile18`, function (sprite, location) {
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile15`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile13`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . 1 1 1 . . 2 2 2 2 2 . . . . . . 
            . 1 1 2 2 2 2 2 2 2 2 2 . . . . . 
            . 2 2 2 . 4 f 4 4 e e e . . . . . 
            . 2 2 4 4 4 f 4 4 4 e 4 e . . . . 
            . 2 4 4 4 f 4 4 4 e e 4 e . . . . 
            . . 2 f f f f 4 4 4 4 e e . . . . 
            . . 2 2 4 4 4 4 4 4 4 . . . . . . 
            . . . 2 2 8 2 2 2 8 2 2 2 2 1 1 1 
            . . . . 8 2 2 2 8 2 2 2 2 2 1 1 1 
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
            . . . . . . 2 2 2 2 2 . . 1 1 1 . 
            . . . . . 2 2 2 2 2 2 2 2 2 1 1 . 
            . . . . . e e e 4 4 f 4 . 2 2 2 . 
            . . . . e 4 e 4 4 4 f 4 4 4 2 2 . 
            . . . . e 4 e e 4 4 4 f 4 4 4 2 . 
            . . . . e e 4 4 4 4 f f f f 2 . . 
            . . . . . . 4 4 4 4 4 4 4 2 2 . . 
            1 1 1 2 2 2 2 8 2 2 2 8 2 2 . . . 
            1 1 1 2 2 2 2 2 8 2 2 2 8 . . . . 
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
    scaling.scaleByPixels(mySprite, 5, ScaleDirection.Uniformly, ScaleAnchor.Middle, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fireup, function (sprite, otherSprite) {
    mySprite.startEffect(effects.fire, 10000)
    mySprite.startEffect(effects.fire, 10000)
    sprites.destroy(otherSprite, effects.fire, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.moon, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    statusbar.value += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.waterthing, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.fountain)
    otherSprite.startEffect(effects.fountain)
    if (controller.up.isPressed()) {
        mySprite.setVelocity(0, -5000)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . 2 1 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 1 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 1 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 1 1 2 2 2 2 . . 
        . 2 1 2 2 2 2 1 1 1 1 2 2 2 2 . 
        . 2 1 2 2 2 2 1 1 1 1 2 2 2 2 . 
        . 2 1 2 2 2 2 2 2 1 1 1 2 2 2 . 
        . 2 1 2 2 2 2 2 1 1 1 1 2 2 2 . 
        . 2 2 1 2 2 2 2 1 1 1 1 2 2 2 . 
        . 2 2 2 2 2 2 2 2 1 1 2 2 2 2 . 
        . . 2 2 1 1 1 2 2 2 2 2 2 2 . . 
        . . 2 2 2 1 1 1 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 1 2 2 2 2 2 . . . 
        . . . 2 2 2 1 1 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        `, mySprite, 0, 1000)
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
            . . 1 1 2 8 5 8 8 5 8 2 1 1 . . 
            . . 1 1 1 8 8 8 8 8 8 1 1 1 . . 
            . . 1 1 8 8 8 8 8 8 8 8 1 1 . . 
            . . . . 8 8 8 . . 8 8 8 . . . . 
            . . . e e e . . . . e e e . . . 
            . . e e e e . . . . e e e e . . 
            `)
        direction = 0
    } else {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . 1 1 1 . . 2 2 2 2 2 . . . . . . 
            . 1 1 2 2 2 2 2 2 2 2 2 . . . . . 
            . 2 2 2 . 4 f 4 4 e e e . . . . . 
            . 2 2 4 4 4 f 4 4 4 e 4 e . . . . 
            . 2 4 4 4 f 4 4 4 e e 4 e . . . . 
            . . 2 f f f f 4 4 4 4 e e . . . . 
            . . 2 2 4 4 4 4 4 4 4 . . . . . . 
            . . . 2 2 8 2 2 2 8 2 2 2 2 1 1 1 
            . . . . 8 2 2 2 8 2 2 2 2 2 1 1 1 
            e e 8 8 5 8 8 8 8 2 2 2 . . . . . 
            e e 8 8 8 8 8 5 8 8 8 . . . . . . 
            e e 8 8 8 8 8 8 8 8 8 e e . . . . 
            . . . . . 8 8 8 8 8 8 e e e . . . 
            . . . . . . . . . . . . e e . . . 
            `)
        direction = 0
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile14`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile15`)
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
            . . 1 1 2 8 5 8 8 5 8 2 1 1 . . 
            . . 1 1 1 8 8 8 8 8 8 1 1 1 . . 
            . . 1 1 8 8 8 8 8 8 8 8 1 1 . . 
            . . . . 8 8 8 . . 8 8 8 . . . . 
            . . . e e e . . . . e e e . . . 
            . . e e e e . . . . e e e e . . 
            `)
        direction = 1
    } else {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 . . 1 1 1 . 
            . . . . . 2 2 2 2 2 2 2 2 2 1 1 . 
            . . . . . e e e 4 4 f 4 . 2 2 2 . 
            . . . . e 4 e 4 4 4 f 4 4 4 2 2 . 
            . . . . e 4 e e 4 4 4 f 4 4 4 2 . 
            . . . . e e 4 4 4 4 f f f f 2 . . 
            . . . . . . 4 4 4 4 4 4 4 2 2 . . 
            1 1 1 2 2 2 2 8 2 2 2 8 2 2 . . . 
            1 1 1 2 2 2 2 2 8 2 2 2 8 . . . . 
            . . . . . 2 2 2 8 8 8 8 5 8 8 e e 
            . . . . . . 8 8 8 5 8 8 8 8 8 e e 
            . . . . e e 8 8 8 8 8 8 8 8 8 e e 
            . . . e e e 8 8 8 8 8 8 . . . . . 
            . . . e e . . . . . . . . . . . . 
            `)
        direction = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.image == img`
        . 2 . 2 2 . . . 
        . . 2 . 2 2 2 . 
        2 . . . 2 4 2 2 
        . . 2 2 2 4 4 2 
        . 2 2 4 4 1 4 2 
        . 2 4 4 1 4 2 2 
        . 2 2 4 4 2 2 . 
        . . 2 2 2 2 . . 
        ` || sprite.image == img`
        . . . 2 2 . 2 . 
        . 2 2 2 . 2 . . 
        2 2 4 2 . . . 2 
        2 4 4 2 2 2 . . 
        2 4 1 4 4 2 2 . 
        2 2 4 1 4 4 2 . 
        . 2 2 4 4 2 2 . 
        . . 2 2 2 2 . . 
        `) {
        sprites.destroy(sprite, effects.fire, 500)
        sprites.destroy(otherSprite, effects.fire, 500)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . 2 . 2 2 . . . 
            . . 2 . 2 2 2 . 
            2 . . . 2 4 2 2 
            . . 2 2 2 4 4 2 
            . 2 2 4 4 1 4 2 
            . 2 4 4 1 4 2 2 
            . 2 2 4 4 2 2 . 
            . . 2 2 2 2 . . 
            `, mySprite, -50, 0)
        projectile.startEffect(effects.fire)
    } else if (direction == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . 2 2 . 2 . 
            . 2 2 2 . 2 . . 
            2 2 4 2 . . . 2 
            2 4 4 2 2 2 . . 
            2 4 1 4 4 2 2 . 
            2 2 4 1 4 4 2 . 
            . 2 2 4 4 2 2 . 
            . . 2 2 2 2 . . 
            `, mySprite, 50, 0)
        projectile.startEffect(effects.fire)
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    game.gameOver(true)
})
let mySprite6: Sprite = null
let mySprite2: Sprite = null
let location: tiles.Location = null
let mySprite3: Sprite = null
let projectile: Sprite = null
let mySprite4: Sprite = null
let direction = 0
let mySprite: Sprite = null
let Jump = 0
let statusbar: StatusBarSprite = null
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.value = 0
statusbar.max = 20
statusbar.positionDirection(CollisionDirection.Top)
info.setLife(6)
scene.setBackgroundColor(6)
Jump = -450
mySprite = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . 4 f 4 4 e e e . . . . 
    . . . 4 4 4 f 4 4 4 e 4 e . . . 
    . . 4 4 4 f 4 4 4 e e 4 e . . . 
    . . . f f f f 4 4 4 4 e . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . 2 2 8 2 2 8 2 2 . . . . 
    . . . 2 2 2 8 2 2 8 2 2 2 . . . 
    . . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
    . . 1 1 2 8 5 8 8 5 8 2 1 1 . . 
    . . 1 1 1 8 8 8 8 8 8 1 1 1 . . 
    . . 1 1 8 8 8 8 8 8 8 8 1 1 . . 
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
let list2 = tiles.getTilesByType(assets.tile`myTile6`)
direction = 0
info.setScore(15)
for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
    tiles.setWallAt(value, false)
}
for (let value2 of tiles.getTilesByType(assets.tile`myTile4`)) {
    tiles.setWallAt(value2, true)
}
for (let value3 of tiles.getTilesByType(assets.tile`myTile3`)) {
    tiles.setWallAt(value3, true)
}
for (let value4 of tiles.getTilesByType(assets.tile`myTile9`)) {
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
    tiles.placeOnTile(mySprite4, value4)
    mySprite4.startEffect(effects.fountain)
    mySprite4.startEffect(effects.fountain)
    mySprite4.startEffect(effects.fountain)
}
for (let value5 of tiles.getTilesByType(assets.tile`transparency16`)) {
    tiles.setWallAt(value5, false)
    tiles.setTileAt(value5, assets.tile`myTile1`)
}
for (let value of tiles.getTilesByType(tileUtil.arrow0)) {
    tiles.setWallAt(value, true)
    tiles.setTileAt(value, assets.tile`myTile10`)
}
game.onUpdateInterval(50000, function () {
    for (let value6 of tiles.getTilesByType(assets.tile`myTile8`)) {
        tiles.setTileAt(value6, assets.tile`myTile4`)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
forever(function () {
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
                if (Math.percentChance(50)) {
                    mySprite3 = sprites.create(img`
                        . . . f f f f f f f f f f . . . 
                        . f f f 4 4 4 4 4 4 4 4 f f f . 
                        f f 4 4 4 5 5 5 5 5 5 4 4 4 f f 
                        f 4 4 5 5 5 f 1 1 f 5 5 5 4 4 f 
                        f 4 4 5 5 5 f 5 5 f 5 5 5 4 4 f 
                        f 4 4 4 4 5 5 5 5 5 5 4 4 4 4 f 
                        f f 4 4 4 4 4 4 4 4 4 4 4 4 f f 
                        . f f f 4 4 4 4 4 4 4 4 f f f . 
                        . . . f f f f f f f f f f . . . 
                        . f f . . . f 7 7 f . . . f f . 
                        f 7 7 f f . f 7 7 f . f f 7 7 f 
                        f 7 7 7 7 f f 7 7 f f 7 7 7 7 f 
                        f 7 7 7 7 7 f 7 7 f 7 7 7 7 7 f 
                        . f 7 7 7 7 f 7 7 f 7 7 7 7 f . 
                        . . f f 7 7 7 7 7 7 7 7 f f . . 
                        . . . . f f f f f f f f . . . . 
                        `, SpriteKind.fireup)
                    tiles.placeOnTile(mySprite3, mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top))
                    mySprite3.ay = 20
                } else {
                    mySprite3 = sprites.create(img`
                        . . f f f f f . . 
                        . f 1 8 8 8 8 f . 
                        f 1 1 8 8 8 1 8 f 
                        f 8 8 8 8 1 1 1 f 
                        f 1 8 8 8 8 1 8 f 
                        . f f f f f f f . 
                        . f d f d f d f . 
                        . f d d d d d f . 
                        . . f f f f f . . 
                        `, SpriteKind.powerup)
                    tiles.placeOnTile(mySprite3, mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top))
                    mySprite3.ay = 20
                }
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
                . . 1 1 2 8 5 8 8 5 8 2 1 1 . . 
                . . 1 1 1 8 8 8 8 8 8 1 1 1 . . 
                . . 1 1 8 8 8 8 8 8 8 8 1 1 . . 
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
                . . 1 1 2 8 5 8 8 5 8 2 1 1 . . 
                . . 1 1 1 8 8 8 8 8 8 1 1 1 . . 
                . . 1 1 8 8 8 8 8 8 8 8 1 1 . . 
                . . . . 8 8 8 . . 8 8 8 . . . . 
                . . . e e e . . . . e e e . . . 
                . . e e e e . . . . e e e e . . 
                `)
        }
    }
})
game.onUpdateInterval(10000, function () {
    location = list[randint(0, list.length - 1)]
    mySprite2 = sprites.create(img`
        .......fffffff....
        .....ff155555f....
        ....f1155555f.....
        ...f1555555f......
        ..f55555555f......
        .f555555555f......
        .f55f55f55f.......
        f555f55f55f.......
        f555f55f55f.......
        f555f55f55f.......
        f5555555555f......
        f55555555555ff....
        f5555555555555ffff
        .f555555555555555f
        .f555555555555555f
        ..f5555555555555f.
        ...f55555555555f..
        ....fff55555fff...
        .......fffff......
        `, SpriteKind.moon)
    tiles.placeOnTile(mySprite2, location.getNeighboringLocation(CollisionDirection.Top))
})
game.onUpdateInterval(2000, function () {
    mySprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        f f . . f f f f f f . . . . . . 
        1 1 f f 1 1 1 1 f f f f . . . . 
        f f 1 f f f f f 1 f f f f f . . 
        f f f f f f f f f f 1 f f f f . 
        f f f f f f f f f f 1 1 f f f . 
        f f f f f f f f f f 1 1 f 1 f f 
        f f f f 1 1 f f f f f 1 1 1 f f 
        f f f 1 1 1 f 1 1 f f f f f f f 
        f f f 1 1 1 1 1 1 1 f f f f f f 
        f f f f 1 1 1 1 1 1 f f f f f . 
        f f f f f f 1 1 1 f f f f f f . 
        f f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f . . . . 
        f f . . f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite6.ax = 1000
    for (let value of list2) {
        if (value.row == mySprite.tilemapLocation().row) {
            tiles.placeOnTile(mySprite6, value)
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
