setTimeout(()=>{
    console.log("Step1");
    setTimeout(()=>{
        console.log("Step2");
        setTimeout(()=>{
            console.log("Step3");
            setTimeout(()=>{
                console.log("Step4");
            },1000);
        },1000);
    },1000);
},1000);