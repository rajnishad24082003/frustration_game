let airplanes = document.getElementsByClassName("iconimg");
for(let i=0;i<airplanes.length;i++)
{
    let leftpositionstart = 10*i;
    let toppositionstart = 0*i;
    airplanes[i].style.setProperty("--start-position-left",`${leftpositionstart}%`);
    airplanes[i].style.setProperty("--start-position-top",`${toppositionstart}%`);
    let leftpositionmiddle = 10*i;
    let toppositionmiddle = 10*i;
    airplanes[i].style.setProperty("--middle-position-left",`${leftpositionmiddle}%`);
    airplanes[i].style.setProperty("--middle-position-top",`${toppositionmiddle}%`);
    let leftpositionend = 10*i;
    let toppositionend = 0*i;
    airplanes[i].style.setProperty("--end-position-left",`${leftpositionend}%`);
    airplanes[i].style.setProperty("--end-position-top",`${toppositionend}%`);
};
for(let i=0;i<airplanes.length;i++)
{
    airplanes[i].style.setProperty("--moving-bottom-start",`0%`);
    airplanes[i].style.setProperty("--moving-right-start",`0%`);
    airplanes[i].style.setProperty("--moving-bottom-end",`10%`);
    airplanes[i].style.setProperty("--moving-right-end",`10%`);
};


let airplanes2 = document.getElementsByClassName("iconimg2");
for(let i=0;i<airplanes2.length;i++)
{
    let leftpositionstart = 10*i;
    let toppositionstart = 80;
    airplanes2[i].style.setProperty("--start-position-left",`${leftpositionstart}%`);
    airplanes2[i].style.setProperty("--start-position-top",`${toppositionstart}%`);
    let leftpositionmiddle = 10*i;
    let toppositionmiddle = 10*i;
    airplanes2[i].style.setProperty("--middle-position-left",`${leftpositionmiddle}%`);
    airplanes2[i].style.setProperty("--middle-position-top",`${toppositionmiddle}%`);
    let leftpositionend = 10*i;
    let toppositionend = 80;
    airplanes2[i].style.setProperty("--end-position-left",`${leftpositionend}%`);
    airplanes2[i].style.setProperty("--end-position-top",`${toppositionend}%`);
};
for(let i=0;i<airplanes2.length;i++)
{
    airplanes2[i].style.setProperty("--moving-bottom-start",`0%`);
    airplanes2[i].style.setProperty("--moving-right-start",`0%`);
    airplanes2[i].style.setProperty("--moving-bottom-end",`10%`);
    airplanes2[i].style.setProperty("--moving-right-end",`10%`);
};

let airplanes3 = document.getElementsByClassName("iconimg3");
for(let i=0;i<airplanes3.length;i++)
{
    let leftpositionstart = 10*i;
    let toppositionstart = 45;
    airplanes3[i].style.setProperty("--start-position-left",`${leftpositionstart}%`);
    airplanes3[i].style.setProperty("--start-position-top",`${toppositionstart}%`);
    let leftpositionmiddle = 10*i;
    let toppositionmiddle = 10*i;
    airplanes3[i].style.setProperty("--middle-position-left",`${leftpositionmiddle}%`);
    airplanes3[i].style.setProperty("--middle-position-top",`${toppositionmiddle}%`);
    let leftpositionend = 10*i;
    let toppositionend = 45;
    airplanes3[i].style.setProperty("--end-position-left",`${leftpositionend}%`);
    airplanes3[i].style.setProperty("--end-position-top",`${toppositionend}%`);
};
for(let i=0;i<airplanes3.length;i++)
{
    airplanes3[i].style.setProperty("--moving-bottom-start",`0%`);
    airplanes3[i].style.setProperty("--moving-right-start",`0%`);
    airplanes3[i].style.setProperty("--moving-bottom-end",`10%`);
    airplanes3[i].style.setProperty("--moving-right-end",`10%`);
};
