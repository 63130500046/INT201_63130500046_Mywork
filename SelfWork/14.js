const friends = [
    { fullname: 'Paul Lee', address: 'Bangkok, Thailand' },
    { fullname: 'Yoko Naree', address: 'Kyoto, Japan' }
  ];
  
  function getFullName(name, surname) {
    return name + ' ' + surname;
  }
  
  //getFriend is a higher order function
  function getFriend(name, surname, cb) {
    return new Promise((resolve, reject) => {
      const fullname = cb(name, surname);
      console.log(`fullname: ${fullname}`);
      if (fullname !== null) resolve(fullname);
      else reject(new Error('cannot get fullname'));
    });
  }
  
  getFriend('Yoko', 'Naree', getFullName).then((friend) => {
    console.log(`my frined name is ${friend}`);
    console.log('Bye Bye');
  });
  