(i = 0), (a = 0);

start1.onclick = () => {
  if (a == 0) {
    a = a + 1;
    q = setInterval(start);
    function start() {
      if (i<10){
        output1.innerHTML = "00" + i;
      }
      else if (i>=10 && i<100){
        output1.innerHTML = "0" + i;
      }
      else if (i>=100 && i<1000){
        output1.innerHTML = i;
      }
      else{
        output1.innerHTML = "reset";
      }
      i++;
    }
  }
};

pause1.onclick = () => {
  if (a == 1) {
    a = a - 1;
    clearInterval(q);
  }
};

reset1.onclick = () => {
  clearInterval(q);
  i = 0;
  a = 0;
  output1.innerHTML = "000";
};

//-------------------------------------------------- 

(j = 0), (b = 0);

start2.onclick = () => {
  if (b == 0) {
    b = b + 1;
    w = setInterval(start);
    function start() {
      if (j<10){
        output2.innerHTML = "00" + j;
      }
      else if (j>=10 && j<100){
        output2.innerHTML = "0" + j;
      }
      else if (j>=100 && j<1000){
        output2.innerHTML = j;
      }
      else{
        output2.innerHTML = "reset";
      }
      j++;
    }
  }
};

pause2.onclick = () => {
  if (b == 1) {
    b = b - 1;
    clearInterval(w);
  }
};

reset2.onclick = () => {
  clearInterval(w);
  j = 0;
  b = 0;
  output2.innerHTML = "000";
};

//-------------------------------------------------- 

(l = 0), (d = 0);

start3.onclick = () => {
  if (d == 0) {
    d = d + 1;
    e = setInterval(start);
    function start() {
      if (l<10){
        output3.innerHTML = "000" + l;
      }
      else if (l>=10 && l<100){
        output3.innerHTML ="00" + l;
      }
      else if(l>=100 && l<1000){
        output3.innerHTML = "0"+l;
      }
      else if(l>=1000 && l<10000){
        output3.innerHTML = l;
      }
      else{
        output3.innerHTML = "reset";
      }
      l++;
    }
  }
};

pause3.onclick = () => {
  if (d == 1) {
    d = d - 1;
    clearInterval(e);
  }
};

reset3.onclick = () => {
  clearInterval(e);
  l = 0;
  d = 0;
  output3.innerHTML = "0000";
};