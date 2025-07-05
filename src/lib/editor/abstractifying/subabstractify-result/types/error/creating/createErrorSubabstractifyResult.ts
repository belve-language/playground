export function createErrorSubabstractifyResult(
	data: ErrorSubabstractifyResultData,
): ErrorSubabstractifyResult {
	return createSubabstractifyResult(errorSubabstractifyResultTypeName, data);
}
