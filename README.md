# **Voice-Activated Virtual Assistant**

This project is a voice-activated virtual assistant built using **HTML**, **CSS**, and **JavaScript**. It leverages the **Web Speech API** to recognize user commands and perform various actions such as opening websites and conducting Google searches.

---

## **Table of Contents**

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## **Features**

- **Voice Recognition**: Detects and processes voice commands using the Web Speech API, allowing for hands-free interaction.
- **Dynamic Greeting**: Provides context-aware greetings based on the time of day (morning, afternoon, evening).
- **Command Handling**: Recognizes and responds to a variety of predefined commands, such as:
  - Opening popular websites like Instagram and YouTube.
  - Responding to personal queries such as "Who are you?" or "How are you?".
- **Google Search Integration**: For unrecognized commands, the assistant automatically performs a Google search based on the input.

---

## **Demo**

You can see the assistant in action by opening the `index.html` file in your browser. Here's how it works:

1. Click the microphone button to activate voice recognition.
2. Speak your command.
3. The assistant will either respond with a voice output or take the necessary action (such as opening a website).

### **Screenshot**:

![Sample Image](https://im.ge/i/Screenshot-2024-10-18-181450.kC1IDY)

### **Live Demo**:

[Click here to view the website](https://zorosanjiluffy.github.io/AI/)

---

## **Installation**

To get this project up and running on your local machine:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/zorosanjiluffy/virtual-assistant.git


Navigate to the project directory:

bash
Copy code
cd virtual-assistant
Open index.html in your preferred web browser.

## *Usage*
Click on the microphone button on the webpage to start voice recognition.
Speak a command (for example, "Open YouTube" or "How are you?").
The assistant will either respond audibly, open a new tab with the requested website, or perform a Google search based on your input.
Customization
You can easily customize the virtual assistant to respond to additional voice commands:

Open the script.js file.
Modify the textCommand() function to handle more specific commands or to add custom responses.


## *Technologies Used*
*HTML*: 
Structure of the web page.
*CSS*: Styling and layout of the user interface.
*JavaScript*: Logic for voice recognition and command execution, using:
Web Speech API: For speech recognition and synthesis.
License
This project is licensed under the MIT License. You are free to use, modify, and distribute this project in accordance with the terms of the license.
