function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 4000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();

  console.log('dgjhkfjgkfgkj');
  console.log('dgjhkfjgkfgkj');
  console.log('dgjhkfjgkfgkj');
  console.log('dgjhkfjgkfgkj');
  console.log('dgjhkfjgkfgkj');
  console.log('dgjhkfjgkfgkj');
  

  console.log("this is result =>"+result);
  // expected output: "resolved"
}

asyncCall();
