# 06-code-wars

This challenge proved quite difficult at first. I over-complicated my code due to the fact that when an attempt failed, the test told me nothing about what part of it failed so I had to sort of guess at what to troubleshoot. That said, in the end I realized that the issue was in how I was writing my conditional for the +1 / -1. I originally was checking "not +1, OR not -1", but it worked when I changed it to "not +1 OR -1".