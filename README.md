<h1 align="center">Welcome to Fast Gym App! 🚀🏋🏽‍♂️</h1>

<p align="center">
  <img src=".github/assets/user-experience.gif" alt="Demo of Fast Gym" style="width: 300px;"/>
</p>

## Are you ready to get fit and have fun?

With FastGym, you'll have access to a vast selection of exercises grouped by type of muscle group where you can easily browse through them and select the ones that best fit your workout routine. And we don't just stop there. We provide you with detailed instructions and even animated GIFs to make sure you're doing each exercise correctly and effectively.

But that's not all. FastGym takes your fitness journey to the next level by allowing you to mark your completed exercises, and keeping track of your progress in the history tab. Imagine seeing all the hard work you've put in towards achieving your fitness goals right at your fingertips!

And let's not forget the three tabs at the bottom of the app: Home, History, and Profile. With Home, you can quickly browse through exercises and log out. In History, you can see all the exercises you've completed and track your progress. And in Profile, you can update your personal information and even change your password.

So what are you waiting for? Use FastGym now, and let's start your fitness journey together!

## Technical Skills

### Navigation
All navigation in the app was made with [React Navigation](https://reactnavigation.org/) using Stack Navigator for Authentication routes and Bottom Tabs for Authenticated routes, on Bottom Tabs 
navigator was used 3 tabs: Home, History and Profile, but 4 screens, that includes the Exercise Details, all the management for now show the 4th icon was made.

### Form Control
For form management was used the [React Hook Form](https://react-hook-form.com/) form make the proccess way easier to develop and to make the code readable for everyone.
Using controled components and hooks from the RH-form, save the app to use a lot of states and save us making way more easy to use `validation` (that was validated using [Yup](https://github.com/jquense/yup))
also saving us to use state for LoadingRequest states with the use of 'isSubmiting' and meke our life easier with the errors states of the fields.

### Component Library
The component library used was the [Native Base](https://nativebase.io/) a utility-first component library, where you can style you component as props inside of the 
components of the library. Provide us a very complete [theme library](https://docs.nativebase.io/default-theme) with quick change between light/dark mode and also provide
us a very simple and powerful Toast component that is totally customizable.

### Data fetching
The data fetching proccess is all made with [Axios](https://axios-http.com/docs/intro) using `interceptors` to convert error messages and anso implemented a `Refresh Token`
proccess. In the future the plan is integrate with [Tanstack query](https://tanstack.com/query/v4/) for quick data caching and smarter manageement of data.

## Future plans
 - [ ] Integrate with Tanstack query
 - [ ] Internacionalization - Automatically detect your language and then changes the app language to it. Initially (PT-BR, EN-UK)

## How to Use

To use Fast Gym, follow these steps:

First of all, the Fast Gym needs its backend to run with all functions, the backend can be found and in the [Fast Gym API Repositorie](https://github.com/SavioNicodemos/fastgym-api)

1. Clone the repository.
2. Install the dependencies using expo.  
   ```npx expo install```
3. Start the server.  
   ```npx expo start```
4. Download Expo Go on your cellphone.  
   [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) or in the [App Store](https://itunes.apple.com/app/apple-store/id982107779)
5. On IOS, open the Camera and scan the QR code, on Android, open the Expo Go app and scan the QR code
6. Enjoy the app!

## Contributing

If you'd like to contribute to Fast Gym, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Push your changes to your fork.
5. Submit a pull request.

## Contact

If you have any questions or comments, please feel free to contact me at my email address: nicodemosgcosta@gmail.com.
