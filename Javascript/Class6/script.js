// Array methods --> MRF (map, reduce, filter)

    // let arr = [102, 22, 57, 65, 102, 44, 99, 102, 5, 3]

    // result = arr.map((item) => item * 2)

    // result = arr.filter((item) => item == 102)

    // result = arr.reduce((store, curr) => (store + curr))

    // console.log(result);

// Event listeners:

    var temp;

    const foo = (event) => {
        temp = event.target.value
    }

    const handleClick = () => {
        console.log(temp);
        
    }