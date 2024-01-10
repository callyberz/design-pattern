// builder pattern (creational design)
// allow create objects with configurable and specialized properties
// difference between with/without director class
// director class is optional - it is used to encapsulate the construction logic

interface CaptchaBuilderType {
  initGoogleRecaptcha(): void;
  inithCaptcha(): void;
  initRecaptchaV3(): void;
  initGeeTest(): void;
}

// implementation of the interface
class CaptchaBuilderBuilder implements CaptchaBuilderType {
  initGoogleRecaptcha() {
    console.log('init Google Recaptcha');
  }

  inithCaptcha() {
    console.log('init hCaptcha');
  }

  initRecaptchaV3() {
    console.log('init Recaptcha V3');
  }

  initGeeTest() {
    console.log('init GeeTest');
  }
}

class CaptchaDirector {
  private builder: CaptchaBuilderType;

  constructor(builder: CaptchaBuilderType) {
    this.builder = builder;
  }

  buildGoogleRecaptcha() {
    this.builder.initGoogleRecaptcha();
  }

  buildHCaptcha() {
    this.builder.inithCaptcha();
  }

  buildRecaptchaV3() {
    this.builder.initRecaptchaV3();
  }

  buildGeeTest() {
    this.builder.initGeeTest();
  }
}

// method 1 - passing the builder to the director
const director = new CaptchaDirector(new CaptchaBuilderBuilder());
director.buildGeeTest();

// method 2 - without director
// for our use case, since CaptchaBuilderType specifies the interface, we can
// just use the builder class directly
const captchaBuilder = new CaptchaBuilderBuilder();
captchaBuilder.initGeeTest();
