# gatsby-remark-images-native-lazy-load

## What does this plugin do?

In you markdown text:
```md
![altText](https://example.com/test.jpg)
```
Yields:
```html
<img src="https://example.com/test.jps" alt="altText" loading="lazy">
```

## What is the difference between this plugin and `gatsby-remark-images`?

`gatsby-remark-images` also has the support to add `loading` attribute, but it only works for local images, not images from external sources.

## What is all about the `loading` attribute for `img` tag?

```html 
<img src="image.png" loading="lazy" alt="…">
```

This image will be **NOT** loaded over the network until the viewport is approaching it.

This will significantly speed up your site loading if there are tons of images. 

Here are the supported values for the `loading` attribute:
* `auto`: Default lazy-loading behavior of the browser, which is the same as not including the attribute.
* `lazy`: Defer loading of the resource until it reaches a calculated distance from the viewport.
* `eager`: Load the resource immediately, regardless of where it's located on the page.

## What browsers are supporting this `loading` attribute?

It is already supported in Chrome 76 and later versions. It should be supported in any Chromium 76-based browser. 

If the browser doesn't support this attribute, it will be ignored and images will load as usual.

Check it out here: https://caniuse.com/#search=loading%20lazy

### How to use this plugin?

In your gatsby.config.js:

```js
{
    resolve: `gatsby-transformer-remark`,
    options: {
        plugins: [
            {
                resolve: `gatsby-remark-images-native-lazy-load`,
                options: {
                    loading: "lazy" // "lazy" | "eager" | "auto"
                    }
                }
        ],
    },
}
```
## Important: This plugin will turn images nodes to html nodes. Always put this plugin at the end of plugins array.