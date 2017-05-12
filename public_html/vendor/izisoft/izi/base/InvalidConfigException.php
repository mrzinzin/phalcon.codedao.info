<?php
/**
 * @link http://www.iziframework.com/
 * @copyright Copyright (c) 2008 izi Software LLC
 * @license http://www.iziframework.com/license/
 */

namespace izi\base;

/**
 * InvalidConfigException represents an exception caused by incorrect object configuration.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class InvalidConfigException extends Exception
{
    /**
     * @return string the user-friendly name of this exception
     */
    public function getName()
    {
        return 'Invalid Configuration';
    }
}
