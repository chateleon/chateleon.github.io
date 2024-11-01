---
sidebar_position: 1
---


# Quick Integration

Experience **Chateleon in under a minute!**

## Prerequisites

- **Sign up** [here](https://customer.chateleon.com/) to get started.

## Integration Steps

1. Paste the following script just before the closing `</body>` tag of your HTML.
2. Replace `<<API_KEY>>` with your unique API key that is generated while activating a pack.

```
<script>
    (function (win, d, t, s, obj, oe, st) {
        win['chateleonObject'] = obj;
        oe = d.createElement(t);
        st = d.getElementsByTagName('script')[0];
        oe.async = 1;
        oe.src = s;
        oe.id = "chateleon-script"
        st.parentNode.insertBefore(oe, st);
    })(window, document, 'script', 'https://integration-kit.chateleon.com/v0/sdk.js', 'chateleon');

    var script = document.querySelector('#chateleon-script');

    script.addEventListener('load', function() {
        chateleon('create', "<<API_KEY>>");
    });
</script>
```

This will seamlessly enable Chateleon on your site!