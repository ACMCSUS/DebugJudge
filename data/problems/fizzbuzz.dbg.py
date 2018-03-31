# @DBG:PRECODE
def fizzbuzz():
    n = int(input())
    mul3 = n % 3 == 0
    mul5 = n % 5 == 0
# @DBG:CODE
    if mul3:
        return 'Fizz'
    if mul5:
        return 'Buzz'
    if mul3 and mul5:
        return 'FizzBuzz'
# @DBG:ANSWER
    if mul3 and mul5:
        return 'FizzBuzz'
    if mul3:
        return 'Fizz'
    if mul5:
        return 'Buzz'
# @DBG:POSTCODE
    return str(n)
