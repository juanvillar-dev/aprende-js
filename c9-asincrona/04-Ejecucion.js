async function A() {
    const a1 = await new Promise(resolve => {
        setTimeout(() => {
        console.log("A-1");
        resolve();
        }, 1000);
    });

    const a2 = await new Promise(resolve => {
        setTimeout(() => {
        console.log("A-2");
        resolve();
        }, 500);
    });

    const a3 = await new Promise(resolve => {
        setTimeout(() => {
        console.log("A-3");
        resolve();
        }, 200);
    });
}



async function B() {
    const b1 = await new Promise(resolve => {
        setTimeout(() => {
        console.log("B---1");
        resolve();
        }, 1000);
    });

    const b2 = await new Promise(resolve => {
        setTimeout(() => {
        console.log("B---2");
        resolve();
        }, 500);
    });

    const b3 = await new Promise(resolve => {
        setTimeout(() => {
        console.log("B---3");
        resolve();
        }, 2000);
    });
}



async function C() {
    const b1 = await new Promise(resolve => {
        setTimeout(() => {
        console.log("C---1");
        resolve();
        }, 700);
    });

    const b2 = await new Promise(resolve => {
        setTimeout(() => {
        console.log("C---2");
        resolve();
        }, 800);
    });

    const b3 = await new Promise(resolve => {
        setTimeout(() => {
        console.log("C---3");
        resolve();
        }, 200);
    });
}


(async () => {
    A();
    B();
    C();
})()