// TODO: write your code here

export class Character {
    attack = 0;                   //уровень атаки
    defence = 0;                  //уровень защиты
    health = 100;                 //уровень жизни
    level = 1;                    //уровень персонажа

    constructor(name, type) {
        if (name.lenght < 2 && name.lenght > 10) {
            throw new Error('Недопустимая длина имени!');
        }

        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (types.indexOf(type) == -1) {
            throw new Error('Такого типа не существует!');
        }

        this.name = name;          //имя
        this.type = type;          //тип
    }

    levelUp() {
        if (this.health == 0) {
            throw new Error('Нельзя повысить левел умершего!');
        }
        this.level ++;
        this.attack = this.attack + this.attack*0.2;
        this.defence = this.defence + this.defence*0.2;
        this.health = 100;
    }

    damage(points) {
        if (this.health == 0) {
            throw new Error('Нельзя изменить внутреннее состояние!');
        }
        this.health -= points * (1 - this.defence / 100);
    }

}

export class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman');
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman');
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    constructor(name) {
        super(name, 'Magician');
        this.attack = 10;
        this.defence = 40;
    }
}

export class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon');
        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character {
    constructor(name) {
        super(name, 'Undead');
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie');
        this.attack = 40;
        this.defence = 10;
    }
}