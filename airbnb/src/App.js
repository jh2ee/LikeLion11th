import logo from './logo.svg';
import './App.css';
import MyComponent from "./MyComponent"
// 이미지 import
import image1 from "./image/1.jpeg"
import image2 from "./image/2.jpeg"
import image3 from "./image/3.jpeg"
import image4 from "./image/4.jpeg"

function App() {
  return (
    <div className="componentlist">
      <MyComponent 
      image={image1}
      title="상하이,중국"
      grade={4.96}
      distance={869}
      date="6월 8일~14일"
      price="68,191"
      >
      </MyComponent>

      <MyComponent 
      image={image2}
      title="상하이,중국"
      grade={4.67}
      distance={870}
      date="6월 8일~13일"
      price="177,052"
      >
      </MyComponent>

      <MyComponent 
      image={image3}
      title="Jeju-si,한국"
      grade={4.97}
      distance={466}
      date="9월 2일~8일"
      price="720,134"
      >
      </MyComponent>

      <MyComponent 
      image={image4}
      title="상하이,중국"
      grade="NEW"
      distance="디자인: Alexis Dornier, Stefanie Strachwit"
      date="6월 12일~17일"
      price="2,599,280"
      >
      </MyComponent>
    </div>
  );
}

export default App;
