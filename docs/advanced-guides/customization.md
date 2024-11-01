---
sidebar_position: 1
---

# Customization

The chateleon function configures and initializes a mascot or interactive element within a web page. The configuration object passed to chateleon specifies key properties for behavior, appearance, and positioning of the mascot.

Configuration Object Properties

1. **apiId (string)**

- Description: The API key required to authenticate and initialize the mascot.
- Example: "apiId": "6Lf1rwYAoC9aadj9elZm56dQVxgA8IXh43h5AkrY"

2. **event (string)**

- Description: Defines the type of event to trigger the mascot. Possible values are:
- "create": Initializes and creates one or multiple mascot instances.
- "move": Moves an existing mascot to a new position.
- Example: "event": "create"

3. **customScript (boolean)**

- Description: Specifies whether a custom script is used to override default behavior or settings.
- Default Value: false
- Example: "customScript": false

4. **filePath (string)**

- Description: Provides the path to a custom script file if customScript is set to true.
- Example: "filePath": "/path/to/custom/script.js"

5. **position (object)**

- Description: Specifies the position of the outer container that wraps the mascot.
- Properties:
- type (string): Type of positioning, typically "fixed" to fix the container within the viewport.
- right (string): Horizontal alignment from the right edge of the viewport.
- bottom (string): Vertical alignment from the bottom edge of the viewport.
- Example:

```
"position": {
  "type": "fixed",
  "right": "0%",
  "bottom": "0%"
}
```


6. **meta (object)**

- Description: Defines specific settings and configurations for the mascot within the container.
- Properties:
- position (object): Controls CSS positioning properties for the mascot.
- type (string): Type of positioning, e.g., "static".
- right (string): Horizontal alignment within the container.
- bottom (string): Vertical alignment within the container.
- dimensions (object): Specifies the dimensions of the mascot.
- height (string): Height of the mascot element, e.g., "150px".
- width (string): Width of the mascot element, e.g., "260px".
- zIndex (number): Z-index to manage the mascot’s layering on the page, e.g., 500.
- append (object): Adds the mascot to a specific HTML element.
- class (string): CSS class name of the element where the mascot will be appended.
- Example:

```
"meta": {
  "position": {
    "type": "static",
    "right": "0%",
    "bottom": "0%"
  },
  "dimensions": {
    "height": "150px",
    "width": "260px",
    "zIndex": 500
  }
}
```


7. **append (object)**

- Description: Adds the mascot to a specific HTML element.
- Properties:
- class (string): CSS class name of the element where the mascot will be appended.
- Example:

```
"append": {
  "class": "elementor-element-19192601"
}
```


Example Usage

```
const config = {
    "apiId": "asdf",
    "event": "create",
    "customScript": false,
    "filePath": "",
    "position": {
      "type": "fixed",
      "right": "0%",
      "bottom": "0%"
    },
    "meta": {
      "position": {
        "type": "static",
        "right": "0%", 
        "bottom": "0%"
      },
      "dimensions": {
        "height": "150px",
        "width": "260px",
        "zIndex": 500
      }
    },
    "append": {
        "class": "elementor-element-19192601"
    }
};

chateleon(config);
```

**Notes**

- Adjust values for right, bottom, height, width, and zIndex as needed to achieve the desired appearance and behavior.
- Use the append property to specify the target HTML element where the mascot should appear.