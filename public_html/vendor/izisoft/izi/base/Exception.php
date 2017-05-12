<?php
/**
 * @link http://www.iziframework.com/
 * @copyright Copyright (c) 2008 izi Software LLC
 * @license http://www.iziframework.com/license/
 */

namespace izi\base;

/**
 * Exception represents a generic exception for all purposes.
 *
 * For more details and usage information on Exception, see the [guide article on handling errors](guide:runtime-handling-errors).
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class Exception extends \Exception
{
    /**
     * @return string the user-friendly name of this exception
     */
    public function getName()
    {
        return 'Exception';
    }
}
