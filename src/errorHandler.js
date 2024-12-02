function errorHandler(res, textToConvert, toCase) {
  const isTextApsent = textToConvert.length === 0;
  const isToCaseParamApsent = toCase === null;
  const isToCaseUnaccepted =
    toCase !== 'SNAKE' &&
    toCase !== 'KEBAB' &&
    toCase !== 'CAMEL' &&
    toCase !== 'PASCAL' &&
    toCase !== 'UPPER' &&
    !isToCaseParamApsent;

  const errorMsgsArray = [];

  if (isTextApsent) {
    const errorMessage = {
      message:
        'Text to convert is required. Correct request' +
        ' is: "/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
    };

    errorMsgsArray.push(errorMessage);
  }

  if (isToCaseParamApsent) {
    const errorMessage = {
      message:
        '"toCase" query param is required.' +
        ' Correct request is: "/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
    };

    errorMsgsArray.push(errorMessage);
  }

  if (isToCaseUnaccepted) {
    const errorMessage = {
      message:
        'This case is not supported. Available' +
        ' cases: SNAKE, KEBAB, CAMEL, PASCAL, UPPER.',
    };

    errorMsgsArray.push(errorMessage);
  }

  if (errorMsgsArray.length > 0) {
    res.end(
      JSON.stringify({
        errors: errorMsgsArray,
      }),
    );

    return true;
  } else {
    return false;
  }
}

module.exports = { errorHandler };
