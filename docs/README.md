# Example

``` dartpad:flutter
import 'package:flutter_web/material.dart';
import 'package:flutter_web_test/flutter_web_test.dart';
import 'package:flutter_web_ui/ui.dart' as ui;

Future main() async {
  await ui.webOnlyInitializePlatform();
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  MyApp();

  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State {
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(),
        body: Center(
          child: Container(
            child: Text('Hello, World!'),
          ),
        ),
      ),
    );
  }
}
```

``` dartpad:dart
void main() { 
  print('Hello, World!'); 
}
```

Code highlight

``` dart
import 'package:flutter_web/material.dart';
import 'package:flutter_web_test/flutter_web_test.dart';
import 'package:flutter_web_ui/ui.dart' as ui;

Future main() async {
  await ui.webOnlyInitializePlatform();
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  MyApp();

  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State {
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(),
        body: Center(
          child: Container(
            child: Text('Hello, World!'),
          ),
        ),
      ),
    );
  }
}
```
