/*
 * LiskHQ/lisky
 * Copyright © 2017 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
import {
	createErrorHandler,
} from '../../../src/utils/helpers';

export function createErrorHandlerIsCalledWithThePrefix() {
	const { prefix } = this.test.ctx;
	const returnValue = createErrorHandler(prefix);
	this.test.ctx.returnValue = returnValue;
}

export function theReturnedFunctionIsCalledWithTheObject() {
	const { returnValue, testObject } = this.test.ctx;
	this.test.ctx.returnValue = returnValue(testObject);
}

export function theValidationErrorIsThrown() {
	const { validationErrorFn } = this.test.ctx;
	try {
		const returnValue = validationErrorFn();
		this.test.ctx.returnValue = returnValue;
		return returnValue;
	} catch (error) {
		const testFunction = validationErrorFn.bind(null);
		this.test.ctx.testFunction = testFunction;
		this.test.ctx.testError = error;
		return testFunction;
	}
}
