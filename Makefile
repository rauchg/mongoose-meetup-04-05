
test:
	@./support/expresso/bin/expresso \
		-I lib \
		-I node_modules \
		-I support

.PHONY: test
