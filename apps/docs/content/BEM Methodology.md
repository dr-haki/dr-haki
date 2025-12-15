---
title: BEM Methodology
number: 7
timestamp: 2025-11-25T01:35:00
type:
  - Concept Log
system: Front-end Galaxy 042
tags:
  - programming
  - styles
---

Issue #1
Starting to migrate the code from previous version into the Turbo Monorepo. 

Since I was using an external UI framework, 
need for raw customization. Wild. 

Coming back to a really structural way of writing styles. 
The **BEM** methodolody rocks. 

> **Concept: BEM**  
> Styling methodology that helps to create reusable components and code sharing in front-end 
> development. 

It is basically a set of naming conventions which make the styles code 
much more flexible, modular and easy to read. 
One of the pillars of [[Clean Code]] is to write code that will be as easy as possible to read. 

This BEM methodology accomplish that. 

## Basic conventions from BEM 

### 1. Block indentation 

Instead of using many style classes such as with Tailwind, 
we can use this block convention with `&__`  to represent relationship. 

```java 
.DrNavbar {
    position: sticky; 
    top: 0; 
    width: 100%; 
    height: 5rem; 

    &__container {
        padding-left: 1rem;
        padding-right: 1rem; 
        height: 100%; 
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
    }
}
```

### 2. Modifier 

For clarifying about multiple variants, we can use these flags with `&--`. 

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```

```sas
.form__submit { 

	// main form styles

	&--disabled {
		// disabled styles here
	}
	
}
```

Cool way of organising the styles code. 

End Log — **Dr. Haki**.

## Sources 

- https://whatislove.dev/articles/bem-modifiers-in-pure-css-nesting/ 