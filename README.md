# ORO FRONT END TEST

## Queries to Design team / Client
1. Missing information for states of elements 
 - hover, visited links; 
 - focus form elements; 
 - focus, hover buttons; 
 
2. For some  dynamic states I need more colors - success, warning, error colors

3. Is it required to have the third photo of founder in different size? Probably not, but I made exact like in Design to fit Pixel-Perfect compliance

## Solution notes:

1. For Hamburger menu I used small JS solution. But sometimes it’s better to use ‚checkbox‘ solution, which doesn’t require any JS. In this case JS allow to have lighter DOM

2. For social icons I’m using inline SVG for better manipulation with colors (e.g. color changes on hover). In real production cases better to have set of icons in generated icon font family

3. Form validation - implementation with only CSS to show ability of simplest solutions. For production I’m usually using some JS validation
