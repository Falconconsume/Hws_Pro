class Student {
    constructor(fullName,yearOfBorn)
    {
        this.fullName = fullName;
        this.yearOfBorn = yearOfBorn;
        this.marks = [];
        this.visitits = new Array(25);
    }
    age()
    {
        const currentYear = new Date().getFullYear();
        if(currentYear - this.yearOfBorn < 0)
        {
            console.log(`You can't be so old!`);
        } else 
        {
            return currentYear - this.yearOfBorn;
        }
    }
    averageMark()
    {
        let sum = 0;
        for(let i = 0; i < this.marks.length;i++)
        {
            sum += this.marks[i];
        }
        return sum/this.marks.length;
    }
    estimate(mark)
    {
        this.marks.push(mark); 
    }   

    present()
    {
        this.visitits.push(true);
    }
    absent()
    {
        this.visitits.push(false);
    }

    averageVisits()
    {
        let sumVisits = 0;
        for(let i = 0;i < this.visitits.length;i++)
        {
            sumVisits += this.visitits[i] ? 1 : 0;
        }
        return sumVisits / this.visitits.length
    }

    summary() {
        const averageMark = this.averageMark();
        const averageVisits = this.averageVisits();
        if(averageMark >= 90 && averageVisits >= 0.9) 
        {
            console.log(`Молодець!`);
        } else if(averageMark >= 90 || averageVisits >= 0.9) 
        {
            console.log(`Добре, але можна краще!`);
        } else 
        {
            console.log(`Редиска`);
        }
    }
}


let student1 = new Student(`Oleg Sokil`,2005);
student1.estimate(100);
student1.estimate(100);
student1.estimate(100);
student1.estimate(89);
student1.estimate(99);
student1.estimate(99);
student1.estimate(98);
student1.estimate(99);
student1.estimate(100);
student1.averageMark();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();


console.log(student1);
student1.summary();


let student2 = new Student(`Olga Kus`,2004);
student2.estimate(80);
student2.estimate(72);
student2.estimate(73);
student2.estimate(98);
student2.estimate(100);
student2.estimate(67);
student2.estimate(89);
student2.estimate(78);
student2.estimate(80);
student2.averageMark();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

console.log(student2);
student2.summary();


