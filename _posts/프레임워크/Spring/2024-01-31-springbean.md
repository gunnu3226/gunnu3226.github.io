---
published: true;
title:  "[Spring] Bean의 개념과 등록을 위한 어노테이션 @Bean, @Configuration, @Component"
excerpt: "Bean등록"

categories:
  - Spring
tags:
  - [Spring, Java]

toc: true
toc_sticky: true
published: true
 
date: 2024-01-31
last_modified_at: 2024-01-31
---
## Spring Bean이란?

### Srping Bean이란?
Spring Bean은 **Spring에 의하여 생성되고, 컨테이너에 의해 생명주기가 관리되는 자바 객체**(Plain Old Java Object, POJO)이다. 객체가 필요할 때면 IoC 컨테이너에서 가져와서 사용한다. 컨테이너에 등록할 객체를 스프링에게 알려줘야 하는데 이것을 등록한다고 하며, **xml설정을 통해 객체를 등록**하거나 **어노테이션을 활용해 등록**할 수 있다. 이 포스팅에서는 어노테이션 기반 등록만 알아보도록 한다.

<br>

### Spring Bean의 구성 요소
- class : Bean으로 등록할 자바 클래스
- id : Bean의 고유 식별자(클래스 이름에서 첫번째 글자만 소문자로 바꾼 형태)
- scope : Bean을 생성하기 위한 방법(sigleton, prototype 등)
- constructor-arg : Bean 생성 시 생성자에 전달할 파라미터
- property : Bean 생성 시 setter에 전달할 인수


scope에 관한 설명을 간략하게 더하자면 Bean Scope는 빈이 존재하는 범위를 뜻한다. **Bean은 기본적으로 singleton, 즉 하나의 객체만을 생성하여 사용하는 방식을 택하고 있다.** 하지만 필요에 따라 prototype을 사용하면 객체는 매번 새롭게 생셩되며 하나의 Bean정의에 대해 다수의 객체가 존재할 수 있게된다. 또한 request, session, global session은 일반 spring어플리케이션이 아닌 Spring MVC WebApplication에서만 사용된다. 이름에 해당하는 하나의 작업에서만 생명주기를 가지는 것이다.

<br>

## Spring Bean 등록방법
### @Component
스프링은 **@Component 어노테이션이 있는 클래스들을 찾아서 자동으로 빈 등록**을 해주는 컴포넌트 스캔을 지원한다. 그래서 우리는 손 쉽에 등록을 원하는 클래스에 @Componenet 어노테이션을 붙여 Bean으로 등록해 줄 수 있다.

```java
@Component
public class Gunnu() {

}
```

그리고 우리가 자주 사용하는 **@Controller, @Service, @Repository, @Configuration 같은 어노테이션에도 내부를 들여다 보면 @Componenet를 가지고 있다.** 그래서 우리가 개발을 할 때, 손쉽게 빈 등록과 기능 구분까지 할 수 있는것이다. 

```java
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Component
public @interface Repository {
    @AliasFor(
        annotation = Component.class
    )
    String value() default "";
}
```


스프링은 기본적으로 **컴포넌트 스캔을 이용한 자동 빈 등록 방식을 권장**한다. 또한 **@Componenet를 붙여 빈으로 등록함을 노출하면 다른 개발자가 보더라도 Bean으로 등록되어 사용되는 것임을 쉽게 알 수 있다.** @Component를 이용하면 Main 또는 Application 클래스에서 @ComponentScan으로 컴포넌트를 탐색하는 범위를 지정해 주어야한다. 하지만 SpringBoot를 이용한다면 @SpringBootConfiguration 하위에 기본적으로 포함되어 있어 설정이 필요 없다.

<br>

### @Configuration과 @Bean
원하는 클래스를 설정 클래스에서 @Bean 어노테이션을 사용해 수동으로 스프링 컨터이너에 빈을 등록하는 방법도 있다. 설정클래스는 위에서 본 @Configuration을 클래스에 붙여주면 된다. 그리고 원하는 메소드에 @Bean을 붙여주어 수동 등록하는 것이다. 

```java
@Configuration
public class Config() {

    @Bean
    public Gunnu gunnu() {
        return new Gunnu();
    }
}
```
이때 아무 클래스에서나 @Bean을 쓰면 안된다. 꼭 **클래스에 @Configuration을 사용해 Bean을 등록할 것을 명시하고 @Bean을 사용해 등록해 주어야 한다.** 이미 빈으로 등록된 클래스라면 내부에서 @Bean을 사용할 수 있다. 하지만 **@Configuration 내부에서 @Bean을 사용해야 싱글톤을 보장 받을 수 있으므로** 꼭 함께 사용해주어야 한다. 거의 쓸 일은 없지만 `@Configuration(proxyBeanMethods = false)`로 매번 새로운 객체가 생성되도록 할 수도 있다.

간단하게 설명하자면 @Configuration이 있는 클래스를 객체로 생성할 때는 **CGLIB 라이브러리를 사용해 프록시 패턴을 적용**한다. 그래서 @Bean이 있는 메소드를 여러번 호출해도 항상 동일한 객체를 반환하여 싱글톤을 보장하는 것이다. 이를 자세히 알고 싶다면 CGLIB 라이브러리와 프록시 패턴을 공부해보자.

수동등록은 주로 다음과 같을 때 사용한다.
- 개발자가 직접 제어가 불가능한 라이브러리를 활용할 때
- 애플리케이션 전범위적으로 사용되는 클래스를 등록할 때
- 다형성을 활용하여 여러 구현체를 등록해주어야 할 때

이제 빈을 등록하고 어떤 어노테이션을 왜 붙이는지, 종류별로 어떤 차이가 있는지 이해하고 코드를 짤 수 있을 것이다.

<br>
<br>
reference  
[https://mangkyu.tistory.com/75](https://mangkyu.tistory.com/75)  
[https://steady-coding.tistory.com/594](https://steady-coding.tistory.com/594)