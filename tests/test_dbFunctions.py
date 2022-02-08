import pytest
# import request
import json
from GetDB.app import getdb
from PutDB.app import putdb


# AWS_ACCESS_KEY_ID = os.environ['AWS_ACCESS_KEY_ID']
# AWS_SECRET_ACCESS_KEY = os.environ['AWS_SECRET_ACCESS_KEY']

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

    # @pytest.mark.two
    # def test_put():
