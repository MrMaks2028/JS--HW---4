car = {
    manufacturer: 'Mitsubishi Motors',
    model: 'Mitsibishi Lancer',
    releaseYear: 2003,
    averageSpeed: 80,
    print(){
        alert(`Производитель: ${car.manufacturer}\n
        Модель: ${car.model}\n
        Год выпуска: ${car.releaseYear}\n
        Средняя скорость: ${car.averageSpeed} км/ч`);
    },
    calculateTravelTime(distance){
        let time = distance / car.averageSpeed;
        let restTime = 0;
        if(time > 4 && time % 4 == 0)
            restTime = (time / 4) - 1;
        else if(time > 4 && time % 4 != 0)
            restTime = time / 4;
        return `Автомобиль преодолеет ${distance} км со ср. скоростью ${car.averageSpeed} км/ч за ${time + restTime} часов`;
    },
    exploitationPeriod(){
        let curentYear = new Date();
        let numberOfPastYears = curentYear.getFullYear() - car.releaseYear;
        return `С момента выпуска автомобиля прошло ${numberOfPastYears} лет`;
    }
}

car.print();
alert(car.calculateTravelTime(640));
alert(car.exploitationPeriod());
