# Lab 11 – React Native Fundamentals

**Date:** 27.03.2026

---

# Overview

This project demonstrates the fundamentals of React Native using Expo.
The lab is divided into two parts:

* **Lab 11.1:** Core components, profile screen, and user input
* **Lab 11.2:** Product list, navigation, and platform-specific code

---

# ⚙️ Technologies Used

* React Native
* Expo
* TypeScript
* React Navigation

---

# Lab 11.1 – Profile Screen

## Features

* Profile card with:

  * Avatar image
  * Name and role
  * Bio description

* Contact form:

  * Email input
  * Phone input
  * Message input
  * Submit button

## Core Components Used

* `View` – container elements
* `Text` – display text
* `Image` – display avatar
* `TextInput` – user input
* `TouchableOpacity` – button interaction
* `ScrollView` – scrolling layout

---

# Lab 11.2 – Product App

## Features

* Product list using `FlatList`
* Product detail screen
* Navigation between screens
* Basic UI for products

## Navigation

Implemented using React Navigation:

* `NavigationContainer` – main navigation wrapper
* `createNativeStackNavigator` – screen navigation

---

# React Native vs React (Web)

| Feature    | React (Web) | React Native      |
| ---------- | ----------- | ----------------- |
| Rendering  | DOM         | Native components |
| Components | div, span   | View, Text        |
| Styling    | CSS         | StyleSheet        |
| Events     | onClick     | onPress           |
| Lists      | map()       | FlatList          |

---

# Project Structure

```
src/
  components/
    ProfileCard.tsx
    ContactSection.tsx
    ProductItem.tsx
  screens/
    ProductListScreen.tsx
    ProductDetailScreen.tsx
  data/
    products.ts
```

---

# How to Run

1. Install dependencies:

```
npm install
```

2. Start project:

```
npx expo start
```

3. Run on device:

* Scan QR code using Expo Go
  OR
* Press `a` for Android emulator

---

# What I Learned

* How to create mobile apps using React Native
* Difference between web React and React Native
* Using core components (View, Text, Image)
* Handling user input with TextInput
* Creating lists using FlatList
* Implementing navigation between screens

---

# Conclusion

This lab helped to understand the basics of React Native and how to build simple mobile applications with navigation and user interaction.
