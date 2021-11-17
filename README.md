# Expo Google Analytics

In order to work you need to provide a `GoogleService-Info.plist` from your firebase project
and put it root

And provide the following info in the `app.json` config

```json
{
  "ios": {
    "bundleIdentifier": "com.example.app",
    "googleServicesFile": "./GoogleService-Info.plist"
  },
  "web": {
    "config": {
      "firebase": {
        "appId": "xxxxxxxxxxxxx:web:xxxxxxxxxxxxxxxx",
        "apiKey": "AIzaXXXXXXXX-xxxxxxxxxxxxxxxxxxx",
        "projectId": "my-awesome-project-id",
        "measurementId": "G-XXXXXXXXXXXX"
      }
    }
  }
}
```
