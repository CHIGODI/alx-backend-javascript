#!/usr/bin/env python3
"""This module contains the zoom_array function """

from typing import Tuple, Iterable, TypeVar

T = TypeVar('T')


def zoom_array(lst: Iterable[T], factor: int = 2) -> Tuple[T, ...]:
    """ returns tupple """
    zoomed_in: Tuple[T, ...] = tuple(
        item for item in lst
        for i in range(factor)
    )
    return zoomed_in


array = [12, 72, 91]

zoom_2x = zoom_array(array)

zoom_3x = zoom_array(array, 3)
