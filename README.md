# Error handling guide

## Step 1: Create sample react netive app

### using npx

```bash
npx react-native@latest init ErrorHandling
```

## Step 2: Install Sentry

### using npx

```bash
npx @sentry/wizard@latest -s -i reactNative
```

Sentry Wizard will patch your project accordingly, though you can set up manually if you prefer. You only need to patch the project once. Then you can add the patched files to your version control system.

## Step 3: Create Sentry configuration file

1. Create src/config directory
2. Create sentry.ts file inside this directory
3. Copy the code below
4. Create account in sentry
5. Create new project in sentry
6. Get the sentry DSN of the project

```javascript
import * as Sentry from '@sentry/react-native';

Sentry.init({
  // Replace with your sentry DSN
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  tracesSampleRate: 1.0,
});
```

## Step 4: Capture errors

Now you can capture errors automatically with Sentry.captureException()

Example:

```javascript
try {
  aFunctionThatMightFail();
} catch (err) {
  Sentry.captureException(err);
}
```

## Step 5: Wrap your app with Sentry (Optional)

```javascript
export default Sentry.wrap(App);
```
