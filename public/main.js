console.log("这是AJAX1");

// 请求 CSS 按钮的事件
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css"); // readyState = 1

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);

        // 创建 style 标签
        const style = document.createElement("style");
        // 填写 style 内容
        style.innerHTML = request.response;
        // 插到 head 中
        document.head.appendChild(style);
      } else {
        alert("CSS 加载失败");
      }
    }
  };

  request.send(); //readyState = 2
};

// 请求 JS 按钮的事件
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);

        // 创建 script 标签
        const script = document.createElement("script");
        // 填写 script 内容
        script.innerHTML = request.response;
        // 插入到 body 中
        document.body.appendChild(script);
      } else {
        alert("2.js 加载失败");
      }
    }
  };
  request.send();
};

// 请求 HTML 按钮的事件
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);

        // 创建 div 标签
        const div = document.createElement("div");
        // 填写 div 内容
        div.innerHTML = request.response;
        // 插入到 body 中
        document.body.appendChild(div);
      } else {
        alert("HTML 加载失败");
      }
    }
  };

  request.send();
};

// 请求 XML 按钮的事件
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("XML 加载失败");
      }
    }
  };
  request.send();
};

// 请求 JSON 按钮的事件
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);

        //JSON.parse() 把符合JSON规范的字符串转化为对象object 或者其他东西
        const object = JSON.parse(request.response);
        myName.textContent = object.name;
      } else {
        alert("JSON 加载失败");
      }
    }
  };
  request.send();
};

// 请求下一页按钮的事件
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          ul.appendChild(li);
        });
        n += 1;
      } else {
        alert("加载下一页失败");
      }
    }
  };
  request.send();
};
