const users = [
    {
      id: 1,
      name: "Leanne Graham",
      address: {
        street: "Kulas Light",
        city: "Gwenborough",
      },
      company: {
        name: "Vingroup",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      address: {
        street: "Victor Plains",
        city: "McKenziehaven",
      },
      company: {
        name: "MindX",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      address: {
        street: "Douglas Extension",
        city: "McKenziehaven",
      },
      company: {
        name: "MindX",
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      address: {
        street: "Hoeger Mall",
        city: "South Elvis",
      },
      company: {
        name: "Vingroup",
      },
    },
  ];

const filteruser = users.filter((item) => item.company.name == 'MindX');
console.log(filteruser)
let id = 1;
const filterusesr1 = users.forEach((item) => {
    if(id < 2 && item.company.name == 'Vingroup'){
        id = id+1;
    }
    else if(id == 2 && item.company.name == 'Vingroup'){
        console.log(item)
    }
})


