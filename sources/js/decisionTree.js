/**
 * A class to calculate decision trees.
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 1.0 (2018-10-09)
 */
class DecisionTree {

    /**
     * The constructor of this class.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-09)
     */
    constructor() {
        this.name = 'DecisionTree';

        this.reset();
    }

    /**
     * Resets all internal variables.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     */
    reset() {
        this.var = 0;
    }

    /**
     * Normalize all given arguments to the sum of zero.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-09)
     */
    normalizeArgumentsToOne()
    {
        var sum = 0;

        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }

        if (sum === 0) {
            console.error('The sum of given parameters must not be zero.');
            return null;
        }

        var p = [];

        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] !== 0) {
                p.push(arguments[i] / sum);
            }
        }

        return p;
    }

    /**
     * Calculates the entropy.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-09)
     */
    entropy() {
        var p = this.normalizeArgumentsToOne.apply(this, arguments);

        if (p === null) {
            return 0;
        }

        var entropy = 0;

        for (var i = 0; i < p.length; i++) {
            entropy -= p[i] * Math.log2(p[i]);
        }

        return entropy;
    }

    /**
     * Calculates the gini coefficient.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-09)
     */
    gini() {
        var p = this.normalizeArgumentsToOne.apply(this, arguments);

        if (p === null) {
            return 0;
        }

        var gini = 1;

        for (var i = 0; i < p.length; i++) {
            gini -= Math.pow(p[i], 2);
        }

        return gini;
    }

    /**
     * Calculates the classification error.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-09)
     */
    classificationError() {
        var p = this.normalizeArgumentsToOne.apply(this, arguments);

        if (p === null) {
            return 0;
        }

        var p_max = Math.max(...p);

        return 1 - p_max;
    }

    /**
     * Calculates the decision tree.
     *
     * @author Björn Hempel <bjoern@hempel.li>
     * @version 1.0 (2018-10-08)
     * @returns {{m: number, n: number}}
     */
    calculate() {
        console.error(String('Do not use this class directory (%s)').replace(/%s/, this.name));
    }
}
