import pytest
from GetDB.app import getdb
from PutDB.app import putdb

class Tests:

    @pytest.fixture
    def event(self):
        return None

    @pytest.fixture
    def context(self):
        return None

        # @pytest.mark.one
    def test_get(event, context):
            data = {
                "visitCount": "10"
            }

            print(getdb(event,context))
