body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: pink;
  font-family: Arial, sans-serif;
  overflow: hidden;
}

.container {
  text-align: center;
  position: relative;
}

.kitty {
  width: 300px;
  z-index: 2;
}

.balloon-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.balloon {
  width: 50px;
  height: 70px;
  background: red;
  border-radius: 50% 50% 50% 50%;
  margin: 0 10px;
  animation: float 4s ease-in-out forwards;
}

@keyframes float {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-300px); opacity: 0; }
}

#nextButton {
  margin-top: 20px;
  padding: 12px 25px;
  font-size: 18px;
  background-color: #ff69b4;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
