import logging
import configparser as ConfigParser
logger = logging.getLogger(__name__)
logger.debug('== module init begins ==')


def test(value):
    logger.debug('== test begins ==')
    logger.info(f'Here be dragons...{value}')
    logger.debug('== test ends ==')


logger.debug('== module init ends ==')
